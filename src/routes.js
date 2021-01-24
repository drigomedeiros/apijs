const apiRootController = require('./infrastructure/controllers/api_root_controller');

/**
 * app: Express App
 */
export function setAppRoutes(app) {

	app.get('/', apiRootController.handle);
    
}
