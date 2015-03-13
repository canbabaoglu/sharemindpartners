<?php

class LeadsController extends \BaseController {

	public function __construct()
	{
		header('Access-Control-Allow-Origin: *');	
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		
		// Setup
		$input       = Input::all();
		$rules       = Lead::$rules;
		$response    = ['type' => 'success'];

		// Validate input
		$validation = Validator::make($input, $rules);

		// 
		if ($validation->fails()) 
		{
			$response = [
				'type'    => 'error',
				'errors'  => $validation->messages()->toArray()
			];
			return Response::json($response);
		}

		//$newlead = Lead::create($input); 

		// email to Omer TODO: DONT FORGET TO CHANGE IT TO OMERS EMAIL
		Mail::send('emails.leads.adminnotify', $input, function($message)
		{
			$message->to('babaoglu.can@gmail.com', 'arinkeskin@gmail.com', 'gtalu@sabanciuniv.edu')
			->subject('ShareMindPartners.com Lead');
		});

		// email to prospect
		
		Mail::send('emails.leads.confirm', $input, function($message) use ($input)
		{
			$message->to($input['email'])->subject('Thank you for contacting ShareMindPartners!');
		});
		
	
		return Response::json($response);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
