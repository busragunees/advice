import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App({getAdvice}) {
    const [state, setState] = useState('idle');



    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);}
    

    return (
        <ReactiveButton
            buttonState={state}
            color={'green'}
            animation={true}
            onClick={(e) => getAdvice()}
            rounded={true}
            outline={true}
            shadow={true}
            idleText={'shuffle'}
        />
    );
}

export default App;