package com.prograd.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicUpdate
public class Mobiles {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mobileId;
	private String mobileBrand;
	private String mobileModel;
	private int mobilePrice;
	private String mobileImageurl;
	private String mobileDisplaysize;
	private String mobileCamera;
	private String mobileRAM;
	private String mobileBattery;			
	private String mobileStorage;
	private String mobileDescription;
	private int rating;
	
}
