{/* <section id="transaction-history">
            <h1 class="transaction-heading">Transaction History</h1>
            <div class="transaction-table-div">
                <h3>Overview of All Transaction</h3>
                <div class="table-container">
                    <table class="transaction-table">
                        <thead><tr>
                            <th class="table-heading">Sr.No</th>
                            <th class="table-heading">Name</th>
                            <th class="table-heading">Account No</th>
                            <th class="table-heading">Date</th>
                            <th class="table-heading">Amount</th>
                            <th class="table-heading">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% for(var i=users.transaction.length-1,j=1;  i >= 0; i--,j++) {%>
                            <% if(users.transaction[i].status==="debited"){ %>
                            <tr>
                                <td class="user-data" style="color:red"><%= j %></td>
                                <td class="user-data" style="color:red"><%= users.transaction[i].name %></td>
                                <td class="user-data" style="color:red"><%= users.transaction[i].account %></td>
                                <td class="user-data" style="color:red"> <%= users.transaction[i].transferDate.getDate()+ "/"
                                    +('0'+(users.transaction[i].transferDate.getMonth()+1)).substr(-2)+"/"+users.transaction[i].transferDate.getFullYear()
                                    %></td>
                                <td class="user-data" style="color:red"><%= -1*(users.transaction[i].amount) %></td>
                                <td class="user-data" style="color:red"><%= users.transaction[i].status %></td>
                            </tr>
                            <% } else {%>
                                <tr>
                                    <td class="user-data" style="color:green"><%= j %></td>
                                    <td class="user-data" style="color:green"><%= users.transaction[i].name %></td>
                                    <td class="user-data" style="color:green"><%= users.transaction[i].account %></td>
                                    <td class="user-data" style="color:green"> <%= users.transaction[i].transferDate.getDate()+ "/"
                                        +('0'+(users.transaction[i].transferDate.getMonth()+1)).substr(-2)+"/"+users.transaction[i].transferDate.getFullYear()
                                        %></td>
                                    <td class="user-data" style="color:green"><%= (users.transaction[i].amount) %></td>
                                    <td class="user-data" style="color:green"><%= users.transaction[i].status %></td>
                                </tr>
                            <% } %>
                        <% } %>
                    </tbody>
                        
                    </table>
                </div>
                
            </div>
        </section> */}