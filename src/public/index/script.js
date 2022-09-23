const t1_button = document.getElementById('t1');
const t2_button = document.getElementById('t2');
const inner_button = document.getElementById('inner');
const left_button = document.getElementById('left');
const right_button = document.getElementById('right');
const full_button = document.getElementById('full');



function removeIMG(){

    const table_container = document.getElementById('table_container');
    const join_img = document.getElementById('joinimg');

    if(join_img){
        table_container.removeChild(join_img);

        table_container.innerHTML = 
        `
        <table id="table" class="table table-striped table-hover table-bordered table-sm caption-top">
            <caption></caption>
            <thead class="table-dark text-center">

            </thead>
            <tbody class="text-center">
    
            </tbody>
        </table>
        `;
    }
}

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
}


t1_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');

    table.children[0].innerHTML = '<b>Users</b> table';
    table.children[2].innerHTML = '';

    sendRequest('/t1').then(data => {
        if (data.ok) {
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">#</th>
                <th scope="col">Full name</th>
                <th scope="col">Email</th>
                <th scope="col">password</th>
                <th scope="col">Car id</th>
            </tr>
            `;

            data.rows.forEach(element => {
                const tr = document.createElement('tr');

                tr.innerHTML =
                    `
                <th scope="row">${element.id}</th>
                <td>${element.fullname}</td>
                <td>${element.email}</td>
                <td>${element.password}</td>
                <td>${element.car_id}</td>
                `;
                table.children[2].appendChild(tr);
            });
        } else {
            console.log(data)
        }
    }).catch(console.error);
};

t2_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');
    table.children[0].innerHTML = '<b>Cars</b> table';
    table.children[2].innerHTML = '';

    sendRequest('/t2').then(data => {
        if (data.ok) {
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">#</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
                <th scope="col">Price</th>
            </tr>
            `;

            data.rows.forEach(element => {
                const tr = document.createElement('tr');

                tr.innerHTML =
                    `
                <th scope="row">${element.id}</th>
                <td>${element.brand}</td>
                <td>${element.model}</td>
                <td>${element.year}</td>
                <td>${element.price}</td>
                `;
                table.children[2].appendChild(tr);
            });

        } else {
            console.log(data)
        }
    }).catch(console.error);
};

inner_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');
    table.children[2].innerHTML = '';
    sendRequest('/inner').then(data => {
        if (data.ok) {
            table.children[0].innerHTML = `<b>Inner</b> join <b>SQL = </b>"<span style="color:blue">${data.sql}</span>" <b>total = ${data.rows.length}</b>`;
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">#</th>
                <th scope="col">Full name</th>
                <th scope="col">Email</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
            </tr>
            `;

            data.rows.forEach(element => {
                const tr = document.createElement('tr');

                tr.innerHTML =
                    `
                <th scope="row">${element.id}</th>
                <td>${element.fullname}</td>
                <td>${element.email}</td>
                <td>${element.brand}</td>
                <td>${element.model}</td>
                `;
                table.children[2].appendChild(tr);
            });
        } else {
            console.log(err)
        }
    }).catch(err => {
        console.log(err)
    })
};

left_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');
    table.children[2].innerHTML = '';
    sendRequest('/left').then(data => {
        if (data.ok) {
            table.children[0].innerHTML = `<b>Left</b> join <b>SQL = </b>"<span style="color:blue">${data.sql}</span>" <b>total = ${data.rows.length}</b>`;
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">#</th>
                <th scope="col">Full name</th>
                <th scope="col">Email</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
            </tr>
            `;

            data.rows.forEach(element => {
                const tr = document.createElement('tr');

                tr.innerHTML =
                    `
                <th scope="row">${element.id}</th>
                <td>${element.fullname}</td>
                <td>${element.email}</td>
                <td>${element.brand}</td>
                <td>${element.model}</td>
                `;
                table.children[2].appendChild(tr);
            });
        } else {
            console.log(err)
        }
    }).catch(err => {
        console.log(err)
    })
};

right_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');
    table.children[2].innerHTML = '';
    sendRequest('/right').then(data => {
        if (data.ok) {
            table.children[0].innerHTML = `<b>Rigth</b> join <b>SQL = </b>"<span style="color:blue">${data.sql}</span>" <b>total = ${data.rows.length}</b>`;
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">cars id</th>
                <th scope="col">Full name</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
            </tr>
            `;

            data.rows.forEach(e => {
                const tr = document.createElement('tr');

                    tr.innerHTML =
                        `
                        <th scope="row">${e.id}</th>
                        <td>${e.fullname}</td>
                        <td>${e.brand}</td>
                        <td>${e.model}</td>
                        `;
                    table.children[2].appendChild(tr);
            });
        } else {
            console.log(err)
        }
    }).catch(err => {
        console.log(err)
    })
};


full_button.onclick = () => {
    removeIMG();
    const table = document.getElementById('table');
    table.children[2].innerHTML = '';
    sendRequest('/full').then(data => {
        if (data.ok) {
            table.children[0].innerHTML = `<b>Full</b> join <b>SQL = </b>"<span style="color:blue">${data.sql}</span>" <b>total = ${data.rows.length}</b>`;
            table.children[1].innerHTML =
                `
            <tr>
                <th scope="col">User id</th>
                <th scope="col">Full name</th>
                <th scope="col">Car id</th>
                <th scope="col">Brand</th>
            </tr>
            `;

            data.rows.forEach(e => {
                const tr = document.createElement('tr');

                    tr.innerHTML =
                        `
                        <th scope="row">${e.uid}</th>
                        <td>${e.fullname}</td>
                        <td>${e.cid}</td>
                        <td>${e.brand}</td>
                        `;
                    table.children[2].appendChild(tr);
            });

        } else {
            console.log(err)
        }
    }).catch(err => {
        console.log(err)
    })
};