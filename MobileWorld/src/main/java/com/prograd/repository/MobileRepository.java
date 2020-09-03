package com.prograd.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prograd.model.Mobiles;

@Repository
public interface MobileRepository extends JpaRepository<Mobiles, Long> {

	List<Mobiles> findByMobileModel(String model);

	List<Mobiles> findByMobileBrand(String brand);
	
	List<Mobiles> findByMobilePrice(int price);
	
	List<Mobiles> findByRating(int rating);

	List<Mobiles> findByMobileBrandAndMobileModel(String mobileBrand, String MobileModel);

	List<Mobiles> findByMobileBrandAndMobilePrice(String mobileBrand, int MobilePrice);
	
	List<Mobiles> findByMobileModelAndMobilePrice(String mobileModel, int MobilePrice);
		
	List<Mobiles> findByMobileBrandAndMobilePriceBetween(String brand, int start, int end);
	
	List<Mobiles> findByMobileModelAndMobilePriceBetween(String model, int start, int end);

	List<Mobiles> findByMobileModelAndRating(String mobileModel, int rating);
}

