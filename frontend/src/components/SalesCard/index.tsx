import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButtton'
import './styles.css'

function SalesCard() {
    return (
        <div className="rsmeta-card">
            <h2 className="rsmeta-sales-title">Vendas</h2>
            <div>
                <div className="rsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="rsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="rsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576"> 14/07/2022</td>
                            <td>Naruto</td>
                            <td className="show992">16</td>
                            <td className="show992">11</td>
                            <td>R$ 34500.00</td>
                            <td>
                                <div className="rsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576"> 14/07/2022</td>
                            <td>Naruto</td>
                            <td className="show992">16</td>
                            <td className="show992">11</td>
                            <td>R$ 34500.00</td>
                            <td>
                                <div className="rsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576"> 14/07/2022</td>
                            <td>Naruto</td>
                            <td className="show992">16</td>
                            <td className="show992">11</td>
                            <td>R$ 34500.00</td>
                            <td>
                                <div className="rsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
