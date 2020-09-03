package com.prograd.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.prograd.model.Mobiles;
import com.prograd.service.MobilesService;

@RestController
@RequestMapping(path="/mobiles")
@CrossOrigin(origins = "http://localhost:4200")

public class MobileController {
	
	@Autowired	
	  private MobilesService mobilesService;


	   @PostMapping(path="/createMobiles")
		public ResponseEntity<Mobiles>  saveMobile(@Valid @RequestBody Mobiles mobiles)
		{
		  
		   Mobiles saveMobile2 = mobilesService.saveMobile(mobiles);
			
			return new ResponseEntity<Mobiles>(saveMobile2, HttpStatus.CREATED);
		}
		
		@PostMapping(path="/createMultipleMobiles")
		public ResponseEntity<List<Mobiles>> SavePlaces(@Valid @RequestBody List<Mobiles> mobiles)
		{
			List<Mobiles> saveMobiles = mobilesService.saveMobiles(mobiles);
			return new ResponseEntity<List<Mobiles>>(saveMobiles, HttpStatus.CREATED);
		}
		
		@GetMapping(path="/retriveMobiles")
		public ResponseEntity<List<Mobiles>> getMobiles()
		{
			List<Mobiles> mobiles = mobilesService.getMobiles();
			
			return new ResponseEntity<List<Mobiles>>(mobiles, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/retriveMobiles/MobileById/{mobileId}")
		public ResponseEntity< Optional<Mobiles>> getMobileById(@PathVariable Long mobileId)
		{
			  Optional<Mobiles> mobileById = mobilesService.getMobileById(mobileId);
			
			return new ResponseEntity< Optional<Mobiles>>(mobileById, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/retriveBrand/{mobileBrand}")
		public ResponseEntity<List<Mobiles>> getMobileBrand(@PathVariable String mobileBrand)
		{
			List<Mobiles> mobileByBrand = mobilesService.getMobileBrand(mobileBrand);
			
			return new ResponseEntity<List<Mobiles>>(mobileByBrand, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/retriveBrand/{mobileModel}")
		public ResponseEntity<List<Mobiles>> getMobileModel(@PathVariable String mobileModel)
		{
			List<Mobiles> mobileByModel = mobilesService.getMobileModel(mobileModel);
			
			return new ResponseEntity<List<Mobiles>>(mobileByModel, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/retrivePrice/{mobilePrice}")
		public ResponseEntity<List<Mobiles>> getMobilePrice(@PathVariable int mobilePrice)
		{
			List<Mobiles> mobileByPrice = mobilesService.getMobilePrice(mobilePrice);
			
			return new ResponseEntity<List<Mobiles>>(mobileByPrice, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/retriveRating/{mobileRating}")
		public ResponseEntity<List<Mobiles>> getMobileRating(@PathVariable int mobileRating)
		{
			List<Mobiles> mobileByRating = mobilesService.getMobilePrice(mobileRating);
			
			return new ResponseEntity<List<Mobiles>>(mobileByRating, HttpStatus.OK);
			
		}
		@GetMapping(path="/mobileBrandAndmobileModel/MobileBrand/{brand}/MobileModel/{model}")
		public ResponseEntity<List<Mobiles>> getMobileBrandAndMobileModel(@PathVariable String brand,@PathVariable String model )
		{
	        
		   List<Mobiles> getMobileBrandAndMobileModel = mobilesService.getMobileBrandAndMobileModel(brand, model);
			return new ResponseEntity<List<Mobiles>>( getMobileBrandAndMobileModel , HttpStatus.OK);
			
		}
		@GetMapping(path="/mobileBrandAndmobilePrice/MobileBrand/{brand}/MobilePrice/{price}")
		public ResponseEntity<List<Mobiles>> getMobileBrandAndMobilePrice(@PathVariable String brand,@PathVariable int price )
		{
	        
		   List<Mobiles> getMobileBrandAndMobilePrice = mobilesService.getMobileBrandAndMobilePrice(brand, price);
			return new ResponseEntity<List<Mobiles>>( getMobileBrandAndMobilePrice , HttpStatus.OK);
			
		}
		
		@GetMapping(path="/mobileModelAndmobilePrice/MobileModel/{model}/MobilePrice/{price}")
		public ResponseEntity<List<Mobiles>> getMobileModelAndMobilePrice(@PathVariable String model,@PathVariable int price )
		{
	        
		   List<Mobiles> getMobileModelAndMobilePrice = mobilesService.getMobileModelAndMobilePrice(model, price);
			return new ResponseEntity<List<Mobiles>>( getMobileModelAndMobilePrice , HttpStatus.OK);
			
		}
		@GetMapping(path="/retrivebetweenModel/MobileModel/{mobileModel}/start/{start}/between/end/{end}")
		public ResponseEntity<List<Mobiles>> getmobileModelAndmobilePriceBetween(@PathVariable String model,@PathVariable int start, @PathVariable int end)
		{
	        
			List<Mobiles> getmobileModelAndmobilePriceBetween = mobilesService.getMobileModelBetweenMobilePrice(model, start, end);
			return new ResponseEntity<List<Mobiles>>(getmobileModelAndmobilePriceBetween, HttpStatus.OK);
			
		}
		@GetMapping(path="/retrivebetweenBrand/MobileBrand/{mobileModel}/start/{start}/between/end/{end}")
		public ResponseEntity<List<Mobiles>> getmobileBrandAndmobilePriceBetween(@PathVariable String brand,@PathVariable int start, @PathVariable int end)
		{
	        
			List<Mobiles> getmobileBrandAndmobilePriceBetween = mobilesService.getMobileBrandBetweenMobilePrice(brand, start, end);
			return new ResponseEntity<List<Mobiles>>(getmobileBrandAndmobilePriceBetween, HttpStatus.OK);
			
		}
		
		@GetMapping(path="/mobileModelAndmobileRating/MobileModel/{model}/MobileRating/{rating}")
		public ResponseEntity<List<Mobiles>> getMobileModelAndRating(@PathVariable String model,@PathVariable int rating )
		{
	        
		   List<Mobiles> getMobileModelAndMobileRating = mobilesService.getMobileModelAndRating(model, rating);
			return new ResponseEntity<List<Mobiles>>( getMobileModelAndMobileRating , HttpStatus.OK);
			
		}
		
}
