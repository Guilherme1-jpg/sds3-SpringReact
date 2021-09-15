import 'bootstrap/dist/css/bootstrap.css';
import Header from "components/fixed/Header";
import Footer from 'components/fixed/Footer';
import DataTable from 'components/fixed/DataTable';
import Barchart from 'components/fixed/BarChart';
import Donutchart from 'components/fixed/DonutChart';


const Dashboard = () => {

    return (

            <>
                <Header />
                <div className="container ">
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
                        <Barchart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Todas as Vendas</h5>
                        <Donutchart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas as Vendas</h2>
                </div>
                </div>
                <DataTable />
                <Footer />
            </>
    );


}

export default Dashboard;