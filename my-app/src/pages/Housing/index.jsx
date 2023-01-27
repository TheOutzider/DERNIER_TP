import { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useFetch } from '../../utils/hooks';
import Slideshow from '../../components/SlideShow';
import TagsContainer from '../../components/Tags';
import HostContainer from '../../components/Host';
import StarsContainer from '../../components/Stars';
import Collapse from '../../components/Collapse';

function Housing() {
  const { data } = useFetch(`http://localhost:3000/logements.json`);
  const param = useParams();
  const [dataOneHouse, setDataOneHouse] = useState(null);
  const nav = useNavigate();

  useEffect(() =>
  {
    let dataHouse = data?.find(oneHouse => oneHouse.id === param.id)
    data && !dataHouse ? Navigate("/error") : setDataOneHouse(dataHouse)
     }, [data, param.id, nav]
 )

   if (!dataOneHouse) {return(
        <div className='loader-container'>
            <Loader data-testid='loader' />
        </div>
     );}

     return (
        <div className='house'>
          <Slideshow props={dataOneHouse.pictures}/>
          <section className='house__infos'>
            <div className='title'>
              <h1 className='title__title'>{dataOneHouse.title}</h1>
              <p className='title__location'>{dataOneHouse.location}</p>
              <TagsContainer tags={dataOneHouse.tags}/>
            </div>
            <div className='host-container'>
              <HostContainer host={dataOneHouse.host} />
              <StarsContainer rating={dataOneHouse.rating}/>
            </div>
          </section>
          <section className='house__details'>
            <Collapse title='Description' $width={'46%'} $fontSize='18px' description={dataOneHouse.description} />
            <Collapse title='Equipements' $width={'46%'} $fontSize='18px' description={dataOneHouse.equipments.map((equipment, index) => (
              <li key={`Equipment-${index}`}>
                {equipment}
              </li>
            ))} />
          </section>
        </div>
      );
    };

    export default Housing;

