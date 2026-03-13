import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  const TOP = require("./img/mario.png");
  const TOP1 = require("./img/notificacao.jpg");
  const TOPTEXTO = 'Mario foi criado pela Nintendo, em seu plano inicial, não se imaginava \
a proporção que este personagem teria no mundo';
  const TITULO1 = 'Primeiros jogos do Mario';
  const IMG1 = require("./img/mario bros.png");
  const IMG2 = require("./img/mario bros1.png");
  const IMG3 = require("./img/mario bros2.jpg");
  const TEXTO1 = 'Mario Kart surgiu como um spin-off da série Super Mario, lançado em 1992 \
para o Super Nintendo Entertainment System.';
  const TITULO2 = 'Mario & Luigi';
  const IMG4 = require("./img/Kart.jpg");
  const TEXTO2 = 'Luigi entrou no jogo Mario pela primeira vez em 1983 no jogo "Mario Bros."\
como um personagem controlado pelo segundo jogador.';
  const TITULO3 = 'Mario vs Donkey Kong'; 
  const IMG5 = require("./img/Luigi.jpg");
  const TEXTO3 = 'Donkey Kong vs. Mario: A Revitalização. A rivalidade entre Donkey Kong e Mario, que começou em 1981 com o jogo Donkey Kong';
  const IMG6 = require('./img/Donkey.jpg');
  return (
    <View style={{ flex: 1, backgroundColor: 'darkblue', paddingVertical: 10, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
          <Image source={TOP} 
          style ={{ width: '50px', height: "50px", borderRadius: '30px', marginHorizontal: '10px', marginTop: '10px'}}
          />
          <Image source={TOP1} 
          style ={{ width: '50px', height: "50px", borderRadius: '30px', marginLeft: '250px', marginTop: '10px'}}
          />
      </View>
      <View style={{ padding: 10, paddingTop: 20}}>
        <Text style={{ color: 'white', fontSize: 15}}> {TOPTEXTO}</Text>
      </View>

      <View style={{ height: 780, backgroundColor: 'white', borderRadius: 40, marginTop: 30}}>
        <Text style={{ padding: 20, fontSize: 20}}> {TITULO1} </Text>
        <View style={{flexDirection: 'row', height: 120}}> 
          <Image source={IMG1} 
          style ={{ width: '100px', height: "100px", borderRadius: '10px', margin: 12}}
          />
          <Image source={IMG2} 
          style ={{ width: '100px', height: "100px", borderRadius: '10px', margin: 12}}
          />
          <Image source={IMG3} 
          style ={{ width: '100px', height: "100px", borderRadius: '10px', margin: 12}}
          />
        </View>
        <View>
          <Text style={{ padding: 10, fontSize: 20}}> {TITULO2} </Text>
        </View>
        <View style={{flexDirection: 'row', height: 120}}> 
          <Image source={IMG4} 
          style ={{ width: '180px', height: "100px", borderRadius: '10px', margin: 12}}
          />
          <Text style={{ fontSize: 13, padding: 10}}> {TEXTO1} </Text>
        </View>
        <View>
          <Text style={{ padding: 10, fontSize: 20}}> {TITULO2} </Text>
        </View>
        <View style={{flexDirection: 'row', height: 120}}> 
          <Image source={IMG5} 
          style ={{ width: '180px', height: "100px", borderRadius: '10px', margin: 12}}
          />
          <Text style={{ fontSize: 13, padding: 10}}> {TEXTO2} </Text>
        </View>
        <View>
          <Text style={{ padding: 10, fontSize: 20}}> {TITULO3} </Text>
        </View>
        <View style={{flexDirection: 'row', height: 120}}> 
          <Image source={IMG6} 
          style ={{ width: '180px', height: "100px", borderRadius: '10px', margin: 12}}
          />
          <Text style={{ fontSize: 13, padding: 10}}> {TEXTO3} </Text>
        </View>
      </View>
    </View>

  )
}

export default App;