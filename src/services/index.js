import CakeService from "./cake-service";
import FilterService from "./filter-service";

export { DataServiceProvider, DataServiceConsumer } from './context';

const cakeService = new CakeService();
const filterService = new FilterService();

export { cakeService, filterService };