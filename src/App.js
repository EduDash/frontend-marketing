import logo from './Logo_Gold_WB.svg';
import wb from './Logo_WB.svg';
import white from './Icon_White.svg';
import './App.css';

const Colors = [
  <ColorScheme colour='222629' name='Deep hue' />,
  <ColorScheme colour='61892F' name='Forest Contrast' />,
  <ColorScheme colour='86C232' name='Natural Green' />,
  <ColorScheme colour='474B4F' name='Backlight' />,
  <ColorScheme colour='DB6E70' name='Drowse' />,
];

const Logos = [
  <LogoScheme svg={logo} />,
  <LogoScheme svg={wb} />,
  <LogoScheme svg={white} />,
];

function _hexToRGB(h) {
  let parse = (x) => {
    return parseInt(x, 16);
  };
  let str = ``;
  str += `${parse(h.substr(0, 2))}, `;
  str += `${parse(h.substr(2, 2))}, `;
  str += `${parse(h.substr(4, 2))}`;
  return str;
}

function ColorScheme({ colour, name, w = false }) {
  return (
    <div
      className='p-4 w-80 rounded-xl h-48 justify-between flex m-4 flex-col items-start edudash__colorscheme'
      style={{
        backgroundColor: `#${colour}`,
      }}
    >
      <h1
        className='text-2xl font-bold'
        style={{
          color: w ? 'black' : 'white',
        }}
      >
        {name}
      </h1>
      <div className='flex flex-col items-start'>
        <span
          className='text-l'
          style={{
            color: w ? 'gray' : 'white',
          }}
        >
          #{colour}
        </span>
        <span
          className='text-sm -mt-1 font-light'
          style={{
            color: w ? 'gray' : 'white',
          }}
        >
          ({_hexToRGB(colour)})
        </span>
        <div className='flex mt-1'>
          {Colors.filter((x) => x.props.colour !== colour).map((color) => (
            <div
              className='w-4 h-4 rounded-sm mr-1'
              style={{ backgroundColor: `#${color.props.colour}` }}
            />
          ))}
          {Colors.map((c) => {
            console.log(parseInt(c.props.colour.substr(0, 2), 16));
          })}
        </div>
      </div>
    </div>
  );
}

function LogoScheme({ svg, png }) {
  return (
    <div className='p-4 w-80 rounded-xl h-36 flex m-4 justify-center items-center edudash__colorscheme border border-gray-400'>
      <div className='relative w-full'>
        <img
          src={svg}
          alt=''
          style={{
            maxHeight: 50,
          }}
        />
        <a className='absolute mt-4 ml-auto right-0 underline' href={svg}>
          .svg
        </a>
        <a className='absolute mt-4 ml-auto right-8 underline' href={png}>
          .png
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundColor: '#222629',
        color: 'white',
      }}
    >
      <div className='px-12 py-8 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-extrabold'>Our logo</h1>
        <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-3'>
          {Logos.map((l) => l)}
        </div>
      </div>
      <div className='px-12 py-8 mt-12 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-extrabold'>Colours</h1>
        <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-3'>
          {Colors.map((c) => c)}
        </div>
      </div>
    </div>
  );
}

export default App;
