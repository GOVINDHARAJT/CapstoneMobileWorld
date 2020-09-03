package com.prograd.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.prograd.model.Mobiles;
import com.prograd.repository.MobileRepository;

@Service
public class MobilesService {

	@Autowired
	private MobileRepository mobileRepository;
	
    @Transactional
    public Mobiles saveMobile(Mobiles mobile) {
        return mobileRepository.save(mobile);
    }
    
    @Transactional
    public List<Mobiles> saveMobiles(List<Mobiles> mobile) {
        return mobileRepository.saveAll(mobile);
    }
    
    
    public List<Mobiles> getMobiles() {
        return mobileRepository.findAll();
    }
    public Optional<Mobiles> getMobileById(Long id) {
        return mobileRepository.findById(id);
    }
    

    public List<Mobiles> getMobileBrand(String brand)
    {
    	return mobileRepository.findByMobileBrand(brand);
    }
    
    public List<Mobiles> getMobileModel(String model)
    {
    	return mobileRepository.findByMobileModel(model);
    }
    
    public List<Mobiles> getMobilePrice(int price)
    {
    	return mobileRepository.findByMobilePrice(price);
    }
    public List<Mobiles> getMobileRating(int rating)
    {
    	return mobileRepository.findByRating(rating);
    }
    public List<Mobiles> getMobileBrandAndMobileModel(String brand,String model)
    {
    	return mobileRepository.findByMobileBrandAndMobileModel(brand, model);
    }
    public List<Mobiles> getMobileBrandAndMobilePrice(String brand,int price)
    {
    	return mobileRepository.findByMobileBrandAndMobilePrice(brand, price);
    }
    public List<Mobiles> getMobileModelAndMobilePrice(String model,int price)
    {
    	return mobileRepository.findByMobileModelAndMobilePrice(model, price);
    }
    public List<Mobiles> getMobileBrandBetweenMobilePrice(String brand,int start,int end)
    {
    	return mobileRepository.findByMobileBrandAndMobilePriceBetween(brand,start,end);
    }
    public List<Mobiles> getMobileModelBetweenMobilePrice(String model,int start,int end)
    {
    	return mobileRepository.findByMobileModelAndMobilePriceBetween(model,start,end);
    }
    
    public List<Mobiles> getMobileModelAndRating(String model,int rating)
    {
    	return mobileRepository.findByMobileModelAndRating(model, rating);
    }
}
