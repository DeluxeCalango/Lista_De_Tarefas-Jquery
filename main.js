$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#endereco-tarefa-nova').val().trim();
        if (enderecoDaNovaTarefa) {
            const novaTarefa = $('<li>').text(enderecoDaNovaTarefa);
            $('#lista-tarefas').append(novaTarefa);
            $('#endereco-tarefa-nova').val('');
            $('form').slideUp();
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});