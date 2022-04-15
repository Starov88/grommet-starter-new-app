import { CakeService } from "./cake-service";

export { DataServiceProvider, DataServiceConsumer } from './context';

const cakeService = new CakeService();

export { cakeService };