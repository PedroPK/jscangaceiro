var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener(
    'submit', 
    function(event) {
        /* 
            Canceling the Form Submission. 

            If this is not done, the Row is going to be added, 
            but the form will be submited and the original page will be reloaded without the previously added row
        */
        event.preventDefault();

        // Create a new Row (TR)
        var tr = document.createElement('tr');

        campos.forEach(
            function(campo) {
                // Create a nre Column (TD), withou infromation for now
                var td = document.createElement('td');

                // Puts a Field Value in the TD
                td.textContent = campo.value;

                // Adds the TD into the TR
                tr.appendChild(td);
            }
        );

        // New Column (TD) to store the Negociation Volume
        var tdVolume = document.createElement('td');

        // The indexes 1 and 2 will store the Quantity and Value, respectively
        tdVolume.textContent = campos[1].value * campos[2].value;

        // Add the Volume TD into the TR
        tr.appendChild(tdVolume);
        
        // Add the TR in the TBody
        tbody.appendChild(tr);

        // Clean the 3 Form Fields
        campos[0].value = '';
        campos[1].value = 1;
        campos[2].value = 0;

        // Put the focus back in the first Field from de Form
        campos[0].focus();

        // Baseline code could be found here
        // https://github.com/flaviohenriquealmeida/cangaceiro-javascript/tree/master/01
    }
);

// Verificar o conteúdo do Array
console.log(campos);