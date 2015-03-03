<?php

class Lead extends \Eloquent {

	protected $fillable = [
		'name',
		'company',
		'email',
		'phoneNo',
		'message_body'
	];

	public $rules = [
		'name'          => 'required',
		'email'         => 'required',
		'phoneNo'       => 'required',
		'message_body'  => 'required'
	]; 


}