import React,{ useState, useEffect} from "react";
import { Platform, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";


import { Container, 
         Scroller,

         HeaderArea,
         HeaderTitle, 
         SearchButton,

         LocationArea,
         LocationInput,
         LocationFinder,

         LoadingIcon,
         ListArea,


} from './styles';
import HospitalItem from '../../components/HospitalItem'

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/location.svg';
import Api from '../../Api'


export default () => {

    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    

   
      const handlerLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getHospital();
            });
        }
    }
    

    const getHospital = async () =>{
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords){ /**Vai preencher sempre que existir a informação  */
            lat = coords.latitude;
            lng = coords.longitude
        }


        let res = await Api.getHospital(lat, lng, locationText);
        if(res.error == ''){
            if(res.loc){
                setLocationText(res.loc);
            }
            setList(res.data);


        }else{
            alert("Erro: "+res.error)
        }
        setLoading(false);
    }

    useEffect(()=>{
        getHospital();
    },[])

    const handleLocationSearch = () =>{
        setCoords({}); /** Utilizará as coordenadas novas para mostrar se tem ou não hospitais cadastrados na região, 
                        zerando a anterior que ja viria por padrão*/
        getHospital(); 
    }

    

    return(
        <Container>
            <Scroller >
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o posto mais próximo</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#fff" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput 
                        placeholder="Qual a sua localização?"
                        placeholderTextColor="#fff"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handlerLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#fff"/>
                    </LocationFinder>
                </LocationArea>
                
                {loading && 
                    <LoadingIcon size="large" color="#fff"/> 
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <HospitalItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    )
}
