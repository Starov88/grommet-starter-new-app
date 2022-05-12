import AuthService from "./auth-service";
import CakeService from "./cake-service";
import FilterService from "./filter-service";
import UserService from "./user-service";

export { DataServiceProvider, DataServiceConsumer } from './context';

const cakeService = new CakeService();
const filterService = new FilterService();
const authService = new AuthService();
const userService = new UserService();

export { cakeService, filterService, authService, userService };