/**
 * req: Express request object
 * res: Express response object 
 */
export function handle(req, res){
	
	res.json({code: 200, message:"Welcome to your new express api"});
	
}
