var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener(
    'submit', 
    function(event) {
        // Cria uma nova TR (Linha)
        var tr = document.createElement('tr');

        campos.forEach(
            function(campo) {
                //Cria uma TD (Coluna) sem informações
                var td = document.createElement('td');

                // Atribui o Valor do Campo à TD
                td.textContent = campo.value;

                // Adiciona a TD dentro da TR
                tr.appendChild(td);
            }
        );
    }
);

// Verificar o conteúdo do Array
console.log(campos);