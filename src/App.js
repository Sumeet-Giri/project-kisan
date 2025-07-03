import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import FeatureCards from './components/FeatureCards';
import Chat from './components/Chat';
import DieseaseDetection from './components/DieseaseDetection';
function App() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 " style={{ minHeight: '100vh', backgroundColor: '#E0D3BE', overflow: 'hidden' }}>
      <div
        className="d-flex "
        style={{
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          background: '#fff',
          minHeight: '80vh',
          height: 'calc(100vh - 80px)',
          minWidth: '1100px',
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        <SideBar />
       
        <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 , backgroundColor: '#f3efe3', position: 'sticky', top: 0, zIndex: 10}}>
          <Header />
          <div className='flex-grow-1 d-flex flex-column justify-content-end' style={{backgroundColor: '#f3efe3', position: 'relative'}}>
            {/* Place other content here if needed */}
            {/* <FeatureCards /> */}
            <DieseaseDetection/>
            {/* <Chat /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
