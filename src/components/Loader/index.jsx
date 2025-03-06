import {useContext} from 'react';
import {Global} from '../../context';
import AnimatedLoader from 'react-native-animated-loader';
import Animation from './animation.json';

function Loader() {
    const {loader} = useContext(Global);

    return (
        <AnimatedLoader
            visible={loader}
            overlayColor={'rgba(0, 0, 0, 0.25)'}
            source={Animation}
            animationStyle={{
                width: 60,
                height: 60,
            }}
            speed={1.3}
            style></AnimatedLoader>
    );
}

export default Loader;
