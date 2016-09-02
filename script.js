function getSequence()
{
    // создаем кэш
    var cache = new Object();

    return function(num)
    {
        // если уже вызывали элемент последовательности, взять из кэша
        if (cache[num] !== undefined)
        {
            $('#cache').html('true');

            return cache[num];
        }
	// иначе вычислить, вернуть пользователю и записать в кэш 
        else
        {
            $('#cache').html('false');

            var sequence = [1, 1, 2];

            for (var i = 0; i+2 <= num; i++)
            {
                sequence.push(sequence[i]+sequence[i+1]+sequence[i+2]);
            }
            cache[num] = sequence[num];

            return sequence[num];
        }
    }
}

$(function()
{
    var seq = getSequence();

    $(document).on('click', '#get-element', function()
    {
        var num = $('#num').val()-1;

        $('#result').html(seq(num))
    });
});

