package com.shinowit.service;

import com.shinowit.dao.mapper.InStockDetailMapper;
import com.shinowit.dao.mapper.InStockMapper;
import com.shinowit.dao.mapper.ProductStockMapper;
import com.shinowit.entity.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014/12/11.
 */
@Service
public class InStockService {

    @Resource
    private InStockMapper inStockMapper;

    @Resource
    private InStockDetailMapper inStockDetailMapper;

    @Resource
    private ProductStockMapper productStockMapper;

    @Transactional
    public boolean create(InStock inStock) {
        boolean result = false;
        inStockMapper.insert(inStock);

        for (InStockDetail inStockDetail : inStock.getDetailList()) {
            inStockDetail.setInStockId(inStock.getInStockId());
            inStockDetailMapper.insert(inStockDetail);
        }

        //以下代码开始计算库存
        for (InStockDetail inStockDetail : inStock.getDetailList()) {
            ProductStockExample ex1 = new ProductStockExample();
            ex1.createCriteria().andProductCodeEqualTo(inStockDetail.getProductCode());
            //查询得到某一种商品的库存数量
            int product_count = productStockMapper.countByExample(ex1);
            if (0 == product_count) {
                //库存里面没有这种商品
                ProductStock stock = new ProductStock();
                stock.setProductCode(inStockDetail.getProductCode());
                stock.setAvgPrice(inStockDetail.getPrice());
                stock.setNum(inStockDetail.getNum());

                productStockMapper.insert(stock);
            } else {
                //算原来的总价值
                List<ProductStock> tmp_list = productStockMapper.selectByExample(ex1);
                ProductStock stock = tmp_list.get(0);
                //原有总价值
                float old_total_money = stock.getAvgPrice() * stock.getNum();
                float new_in_total_money = inStockDetail.getPrice() * inStockDetail.getNum();
                //更新库存数量
                stock.setNum(stock.getNum() + inStockDetail.getNum());
                //更新新的平均价格
                if (stock.getNum() != 0) {
                    stock.setAvgPrice((old_total_money + new_in_total_money) / stock.getNum());
                } else {
                    stock.setAvgPrice(inStockDetail.getPrice());
                }
                productStockMapper.updateByPrimaryKey(stock);
            }

        }


        result = true;
        return result;
    }

    @Transactional
    public boolean edit(InStock inStock) {
        boolean result = false;
        inStockMapper.updateByPrimaryKey(inStock);

        /**
         * 算法说明：把旧的入库明细数据都删除掉,然后再根据新的入库明细数据再插入一遍
         */

        //以下查出所有旧的入库明细
        InStockDetailExample inStockDetailExample = new InStockDetailExample();
        inStockDetailExample.createCriteria().andInStockIdEqualTo(inStock.getInStockId());
        List<InStockDetail> old_detail_datas = inStockDetailMapper.selectByExample(inStockDetailExample);

        for (InStockDetail inStockDetail : old_detail_datas) {
            //以下开始查库存
            ProductStockExample ex1 = new ProductStockExample();
            ex1.createCriteria().andProductCodeEqualTo(inStockDetail.getProductCode());
            List<ProductStock> tmp_list = productStockMapper.selectByExample(ex1);

            if (tmp_list.size() == 0) {
                //没有查到对应的产品库存信息,应该不会发生
            } else {
                ProductStock stock = tmp_list.get(0);
                //原有总价值
                float old_total_money = stock.getAvgPrice() * stock.getNum();
                float del_in_total_money = inStockDetail.getPrice() * inStockDetail.getNum();
                //更新库存数量
                stock.setNum(stock.getNum() - inStockDetail.getNum());
                //更新新的平均价格
                if (stock.getNum() != 0) {
                    stock.setAvgPrice((old_total_money - del_in_total_money) / stock.getNum());
                    productStockMapper.updateByPrimaryKey(stock);
                } else {
                    productStockMapper.deleteByPrimaryKey(inStockDetail.getProductCode());
                }
            }
            inStockDetailMapper.deleteByPrimaryKey(inStockDetail.getInStockDetailId());
        }

        for (InStockDetail inStockDetail : inStock.getDetailList()) {
            inStockDetail.setInStockId(inStock.getInStockId());
            inStockDetail.setInStockDetailId(null);
            inStockDetailMapper.insert(inStockDetail);

            //更新库存

            ProductStockExample ex1 = new ProductStockExample();
            ex1.createCriteria().andProductCodeEqualTo(inStockDetail.getProductCode());
            //查询得到某一种商品的库存数量
            int product_count = productStockMapper.countByExample(ex1);
            if (0 == product_count) {
                //库存里面没有这种商品
                ProductStock stock = new ProductStock();
                stock.setProductCode(inStockDetail.getProductCode());
                stock.setAvgPrice(inStockDetail.getPrice());
                stock.setNum(inStockDetail.getNum());

                productStockMapper.insert(stock);
            } else {
                //算原来的总价值
                List<ProductStock> tmp_list = productStockMapper.selectByExample(ex1);
                ProductStock stock = tmp_list.get(0);
                //原有总价值
                float old_total_money = stock.getAvgPrice() * stock.getNum();
                float new_in_total_money = inStockDetail.getPrice() * inStockDetail.getNum();
                //更新库存数量
                stock.setNum(stock.getNum() + inStockDetail.getNum());
                //更新新的平均价格
                if (stock.getNum() != 0) {
                    stock.setAvgPrice((old_total_money + new_in_total_money) / stock.getNum());
                } else {
                    stock.setAvgPrice(inStockDetail.getPrice());
                }
                productStockMapper.updateByPrimaryKey(stock);
            }
        }

        result = true;
        return result;
    }

    @Transactional
    public boolean delete(Integer in_stock_id) {
        boolean result = false;
        InStockDetailExample inStockDetailExample = new InStockDetailExample();
        inStockDetailExample.createCriteria().andInStockIdEqualTo(in_stock_id);
        List<InStockDetail> old_detail_datas = inStockDetailMapper.selectByExample(inStockDetailExample);

        for (InStockDetail inStockDetail : old_detail_datas) {
            //以下开始查库存
            ProductStockExample ex1 = new ProductStockExample();
            ex1.createCriteria().andProductCodeEqualTo(inStockDetail.getProductCode());
            List<ProductStock> tmp_list = productStockMapper.selectByExample(ex1);

            if (tmp_list.size() == 0) {
                //没有查到对应的产品库存信息,应该不会发生
            } else {
                ProductStock stock = tmp_list.get(0);
                //原有总价值
                float old_total_money = stock.getAvgPrice() * stock.getNum();
                float del_in_total_money = inStockDetail.getPrice() * inStockDetail.getNum();
                //更新库存数量
                stock.setNum(stock.getNum() - inStockDetail.getNum());
                //更新新的平均价格
                if (stock.getNum() != 0) {
                    stock.setAvgPrice((old_total_money - del_in_total_money) / stock.getNum());
                    productStockMapper.updateByPrimaryKey(stock);
                } else {
                    productStockMapper.deleteByPrimaryKey(inStockDetail.getProductCode());
                }
            }
            inStockDetailMapper.deleteByPrimaryKey(inStockDetail.getInStockDetailId());
        }
        inStockMapper.deleteByPrimaryKey(in_stock_id);
        result=true;
        return result;
    }
}
