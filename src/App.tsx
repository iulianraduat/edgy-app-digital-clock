import EdgyApi from 'edgy-api';
import React from 'react';
import 'sanitize.css';
import ThemedDigitalClock, { ThemedDigitalClockProps } from 'themed-digital-clock';
import DefineDigitalClock from './components/DefineDigitalClock';

const style: React.CSSProperties = {
  height: '100vh',
  width: '100vw'
};

const App = () => {
  const Api = new EdgyApi();
  return Api.isAppCfg() ? (
    <div style={style}>
      <ThemedDigitalClock {...(Api.getAppCfg() as ThemedDigitalClockProps)} />
    </div>
  ) : (
    <DefineDigitalClock />
  );
};

export default App;
