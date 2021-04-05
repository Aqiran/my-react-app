import ToolTable from './components/htooltable';
import EngageTable from './components/hengagetable';
import './components/home.css'

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <ToolTable />
            </div>
            <div className="col">
                <EngageTable />
            </div>
        </div>);
}

export default Home;
