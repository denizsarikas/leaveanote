import footerbg from '../assets/footerbg.jpg';

export default function Footer() {

  // const divStyle = {
  //   backgroundImage: `url(${footerbg})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <div className="opacity-50 text-yellow-300 font-serif text-3xl text-right w-full" style={{backgroundImage: `url(${footerbg})`, backgroundSize: 'cover',backgroundPosition: 'center',}}>
      -DENIZ
    </div>
  );
}
