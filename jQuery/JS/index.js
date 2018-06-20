(() => {
    $('body').eq(0).css({ 'background-color': '#595959' });

    $('body').append(
        $(`  <div id="baymax">

            <div class="head">
                <div class="eye"></div>
                <div class="mouth"></div>
                <div class="eye"></div>
            </div>

            <div class="chest">
                <div class="heart"></div>
            </div>

            <div class="belly"></div>

            <div class="arm">
                <div class="arm-l">
                    <div class="big-finger"></div>
                    <div class="tinny-finger"></div>
                </div>
                <div class="arm-r">
                    <div class="big-finger"></div>
                    <div class="tinny-finger"></div>
                </div>
            </div>

            <div class="leg">
                <div class="leg-l"></div>
                <div class="leg-r"></div>
            </div>

        </div>`)
    );

    $.keyframe.define([
        {
            name: 'moving',
            '0%, 80%': { right: 0 },
            '20%, 60%': { right: '20vh' }
        },
        {
            name: 'hestating',
            '0%, 30%, 60%, 90%': { transform: 'rotate(0deg)' },
            '10%, 20%': { transform: 'rotate(10deg)' },
            '70%': { transform: 'rotate(-10deg)' }
        },
        {
            name: 'blinking',
            '10%, 15%, 72.5%, 77.5%': {
                'border-radius': '50%',
                height: '3vh'
            },
            '12.5%, 75%': {
                'border-radius': 0,
                height: '0.75vh'
            }
        },
        ...['heartfollowing',
        'chest-shaking' ,
        'belly-shaking',
        'leg-r-moving',
        'leg-l-moving',
        'arm-r-moving',
        'arm-l-moving'].map(ele => {
            let style = {};
            switch (ele) {
                case 'heartfollowing': style['origin'] = { left: 0 };style['action'] = { left: '0.625vh' };break;
                case 'chest-shaking': style['origin'] = { width: '38vh' };style['action'] = { width: '39.25vh' };break;
                case 'belly-shaking': style['origin'] = { width: '55vh' };style['action'] = { width: '57.5vh' };break;
                case 'leg-r-moving': style['origin'] = { transform: 'rotate(2.5deg)' };style['action'] = { transform: 'rotate(-10deg)' };break;
                case 'leg-l-moving': style['origin'] = { transform: 'rotate(-2.5deg)' };style['action'] = { transform: 'rotate(10deg)' };break;
                case 'arm-r-moving': style['origin'] = { transform: 'rotate(-27deg)' };style['action'] = { transform: 'rotate(-30deg)' };break;
                case 'arm-l-moving': style['origin'] = { transform: 'rotate(27deg)' };style['action'] = { transform: 'rotate(30deg)' };break;
            }
            return {
                name: ele,
                '0%, 10%, 20%, 60%, 70%, 80%': style['origin'],
                '5%, 15%, 65%, 75%': style['action']
            }
        })
    ]);


    $('#baymax').css({
        position: 'relative',
        margin: '1.25vh auto 0',
        animation: 'moving 4s linear infinite'
    });

    $('.head').css({
        position: 'relative',
        margin: '0 auto',
        height: '14.5vh',
        width: '22vh',
        'border-radius': '50%',
        'background-color': '#fff',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'border-bottom': '0.75vh solid #e0e0e0',
        animation: 'hestating linear 4s infinite'
    }).find('.eye').css({
        height: '3vh',
        width: '3vh',
        'border-radius': '50%',
        'background-color': '#000',
        animation: 'blinking linear 4s infinite'
    }).siblings('.mouth').css({
        height: '0.75vh',
        width: '6vh',
       'background-color': '#000'
    });

    $('.chest').css({
        margin: '-3.5vh auto 0',
        height: '45vh',
        width: '38vh',
        'border-radius':' 47%',
        'background-color': '#fff',
        border: '0.5vh solid #e0e0e0',
        animation: 'chest-shaking 4s linear infinite'
    }).find('.heart').css({
        position: 'relative',
        height: '6vh',
        width: '6vh',
        margin: '7.5vh 0 0 27vh',
        'border-radius': '50%',
        'box-shadow': '0.3vh 0.6vh 0.3vh #ccc inset',
        border: '0.25vh solid #ccc',
        animation: 'heartfollowing 4s linear infinite'
    });

    $('.belly').css({
        margin: '-35vh auto 0',
        height: '65vh',
        width: '55vh',
        'border-radius': '50%',
        'border-width': '0.5vh',
        'border-style': 'solid',
        'border-color': 'rgba(0, 0, 0, 0) #e0e0e0 #e0e0e0 #e0e0e0',
        'background-color': '#fff',
        animation: 'belly-shaking 4s linear infinite'
    });

    $('.leg').css({
        position: 'relative',
        margin: '5.75vh auto 0',
        height: '21vh',
        width: '40vh',
        'z-index': -1
    }).children().css({
        position: 'absolute',
        height: '100%',
        width: '18.5vh',
        'transform-origin': 'center top',
        'border-style': 'solid',
        'border-color': '#e0e0e0',
        'background-color': '#fff'
    }).siblings('.leg-r').css({
        right: 0,
        'border-radius': '0 0 45% 2.5vh',
        'border-width': '0 0.3vh 0.3vh 0',
        transform: 'rotate(2.5deg)',
        animation: 'leg-r-moving 4s linear infinite'
    }).siblings('.leg-l').css({
        left: 0,
        'border-radius': '0 0 2.5vh 45%',
        'border-width':  '0 0 0.3vh 0.3vh',
        transform: 'rotate(-2.5deg)',
        animation: 'leg-l-moving 4s linear infinite'
    });

    $('.arm').css({
        position: 'relative',
        margin: '-72.5vh auto 0',
        height: '54vh',
        width: '40vh'
    }).children().css({
        position: 'absolute',
        height: '100%',
        width: '20vh',
        'border-radius': '50%',
        border: '0.375vh solid #e0e0e0',
        'background-color': '#fff',
        'transform-origin': 'center top',
        'z-index': -1
    }).children().css({
        'border-width': '0.375vh',
        'border-style': 'solid'
    }).siblings('.big-finger').css({
        position: 'absolute',
        height: '11vh',
        width: '4.4vh',
        'border-radius': '50%',
        bottom: '-6vh',
        'background-color': '#fff'
    }).siblings('.tinny-finger').css({
        position: 'absolute',
        height: '7.7vh',
        width: '3.3vh',
        bottom: '-1.5vh',
        'border-radius': '50%',
        'background-color': '#fff'
    });
    ['right', 'left'].map(ele => {
        $('.arm').children(`.arm-${ele[0]}`).css({
            [ele]:0,
            transform: `rotate(${ele === 'right' ? '-' : ''}27deg`,
            animation: `arm-${ele[0]}-moving 4s linear infinite`
        }).children().css({
            transform: `rotate(${ele === 'left' ? '-' : ''}50deg`,
            'border-color': `transparent ${ele === 'right' ? '#e0e0e0' : ''} transparent
                             transparent ${ele === 'left' ? '#e0e0e0' : ''}`})
          .siblings('.big-finger').css({ [ele]: '7.5vh' })
          .siblings('.tinny-finger').css({ [ele]: '11vh' });
    });

})()