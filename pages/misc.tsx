import {useState} from 'react';
import {NextPage} from 'next';
import {Audio} from 'react-loader-spinner';


const Style={
    height: 498,
    width: 680,
    frameborder: 0
}

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="items-center">
            TBD
            {/*<a class="twitter-timeline" width="280" height="300" href="https://twitter.com/jk_rowling?ref_src=twsrc%5Etfw">Tweets by jk_rowling</a> {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}*/}
        </div>
    );
};

export default Misc;
