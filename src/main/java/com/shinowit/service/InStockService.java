package com.shinowit.service;

import com.shinowit.dao.mapper.InStockDetailMapper;
import com.shinowit.dao.mapper.InStockMapper;
import com.shinowit.dao.mapper.ProductStockMapper;
import com.shinowit.entity.InStock;
import com.shinowit.entity.InStockDetail;
import com.shinowit.entity.ProductStock;
import com.shinowit.entity.ProductStockExample;
import org.springframework.stereotype.Service;

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

    public boolean create(InStock inStock){
        boolean result=false;
        inStockMapper.insert(inStock);

        for (InStockDetail inStockDetail:inStock.getDetailList()){
            inStockDetail.setInStockId(inStock.getInStockId());
            inStockDetailMapper.insert(inStockDetail);
        }

        //以下代码开始计算库存
        for (InStockDetail inStockDetail:inStock.getDetailList()){
            ProductStockExample ex1=new ProductStockExample();
            ex1.createCriteria().andProductCodeEqualTo(inStockDetail.getProductCode());
            //查询得到某一种商品的库存数量
            int product_count=productStockMapper.countByExample(ex1);
            if (0==product_count){
                //库存里面没有这种商品
                ProductStock stock=new ProductStock();
                stock.setProductCode(inStockDetail.getProductCode());
                stock.setAvgPrice(inStockDetail.getPrice());
                stock.setNum(inStockDetail.getNum());

                productStockMapper.insert(stock);
            }else{
                //算原来的总价值
                List<ProductStock> tmp_list= productStockMapper.selectByExample(ex1);
                ProductStock stock=tmp_list.get(0);
                //原有总价值
                float old_total_money=stock.getAvgPrice()*stock.getNum();
                float new_in_total_money=inStockDetail.getPrice()*inStockDetail.getNum();
                //更新库存数量
                stock.setNum(stock.getNum()+inStockDetail.getNum());
                //更新新的平均价格
                if (stock.getNum()!=0){
                    stock.setAvgPrice((old_total_money+new_in_total_money)/stock.getNum());
                }else{
                    stock.setAvgPrice(0f);
                }
                productStockMapper.updateByPrimaryKey(stock);
            }

        }


        result=true;
        return result;
    }
}
