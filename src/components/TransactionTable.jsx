import React from "react";

class TransactionTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            allTransaction:{}
        }
        
        this.getAllTransaction = this.getAllTransaction.bind(this);

    }
    async getAllTransaction()
    {
        const response = await fetch('http://127.0.0.1:8000/api/transactionHeaders/'); 
        if(response.ok)
        {
            var allData = await response.json();            
            this.setState({allTransaction:allData.data});
        }
    }
    componentDidMount()
    {
        this.getAllTransaction();
        
    }
    
    render()
    {
        if(this.state.allTransaction.length>0)
        {
            return(   
                <div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Beneficiario</th>
                                <th>Monto</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allTransaction.map((item,index)=>(
                                    <tr key={item.transfer_id}>
                                        <td>{item.payer_user_id}</td>
                                        <td>{item.beneficiary_account_id}</td>
                                        <td>{item.requested_value}</td>
                                        <td>{item.transfer_status}</td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                    </table>
                </div>
                );
        }else
        {
            return(
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Beneficiario</th>
                                <th>Monto</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        </table>
                </div>
            )
        }
        
  }

}

export default TransactionTable;
