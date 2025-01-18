import React from 'react';
import '../styles/section.scss';

import { useGlobalContext } from 'hostApp/GlobalContext';

const Section = () => {
    const [react18] = useGlobalContext();
    return ( 
        <section style={{'backgroundColor': react18}}>This is section</section>
     );
}
 
export default Section;