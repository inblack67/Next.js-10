import Image from 'next/image';

const image = () =>
{
    return (
        <div>
            <h1>images</h1>
            <p>Fixed</p>
            <Image src='/images/img1.jpg' layout='fixed' width={ 400 } height={ 400 } />
            <p>Intrinsic - Can shrink but could never grow beyond the given size</p>
            <Image src='/images/img2.jpg' layout='intrinsic' width={ 400 } height={ 400 } />
            <p>Responsive</p>
            <Image src='/images/img3.jpg' layout='responsive' width={ 400 } height={ 400 } />
            <p>Fill</p>
            <div style={ { width: 200, height: 200, position: 'relative' } }>
                <Image src='/images/img1.jpg' layout='fill' />
            </div>
        </div>
    );
};

export default image;
