import HtoolTable from './components/htooltable';
import HengageTable from './components/hengagetable';
import './components/home.css'

//Htooltable -> Table of tools on Homescreen
//Hengagetable -> Table of Engagements on Homescreen 

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <HtoolTable />
            </div>
            <div className="col">
                <HengageTable />
            </div>
        </div>);
}

export default Home;
