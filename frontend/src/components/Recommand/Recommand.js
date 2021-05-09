import React, { useState,useEffect } from "react";
import { CardDeck,Card} from 'react-bootstrap';
import Panel from '../../layout/Panel/Panel';
import blurry from './blurry.jpeg';
import redeye from './redeye.jpeg';
import burning from './burning.jpeg';
import tearing from './tearing.jpeg';

export default function Recommand() {
    const [Symptom, setSymptom] = useState("")

    const SymptomSelectHandler = e => {
        setSymptom(e.target.value);
    }

    const supported_Symptoms = ['Red Eye', 'Tearing', 'Burning', 'Blurry']

    const SymptomDropdown = () => (
        <select class="form-select border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" value={Symptom} onChange={SymptomSelectHandler} >
            <option value="">Please choose a Symptoms</option>
            {supported_Symptoms.map(Symptom => <option key={Symptom}>{Symptom}</option>)}
        </select>
    )
  return (
    <>
    <Panel>
        <h1> Recommandation</h1>
        <SymptomDropdown />
        <CardDeck style={{marginTop: "30px"}}>
            { Symptom=='Red Eye' &&
            <Card>
                <Card.Body>
                <img src={redeye} width="200" height="200"/>
                <Card.Title>Red Eye</Card.Title>
                <input style={{marginRight: "20px"}} type="checkbox" />
                <label> Use Eye Drop</label>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"></small>
                </Card.Footer>
            </Card>
            }
            { Symptom=='Tearing' &&
            <Card>
                <Card.Body>
                <Card.Title>Tearing</Card.Title>
                <img src={tearing} width="200" height="200"/>
                <div className="d-flex flex-column justify-content-center align-items-left">
                    <label> 
                        <input style={{marginRight: "20px"}} type="checkbox" /> 
                        Close your eyes for a minute
                    </label>
                    <label>
                        <input style={{marginRight: "20px"}} type="checkbox" />
                        Blink Quickly for each seconds 
                    </label>
                    <label>
                        <input style={{marginRight: "20px"}} type="checkbox" />
                        Use Eye Drop
                    </label>
                </div>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"></small>
                </Card.Footer>
            </Card>
            }
             { Symptom=='Burning' &&
            <Card>
                <Card.Body>
                <Card.Title>Burning</Card.Title>
                <img src={burning} width="200" height="100"/>
                <div className="d-flex flex-column justify-content-center align-items-left">
                    <label> 
                        <input style={{marginRight: "20px"}} type="checkbox" /> 
                        Rinse eyes with warm water
                    </label>
                    <label>
                        <input style={{marginRight: "20px"}} type="checkbox" />
                        Take a break from screen for 5 minutes
                    </label>
                </div>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"></small>
                </Card.Footer>
            </Card>
            }
            { Symptom=='Blurry' &&
            <Card>
                <Card.Body>
                <Card.Title>Blurry</Card.Title>
                <img src={blurry} width="300" height="200"/>
                <div style={{marginTop: "20px"}} className="d-flex flex-column justify-content-center align-items-left">
                    <label>
                        <input style={{marginRight: "20px"}} type="checkbox" />
                        Take a break from screen for 5 minutes
                    </label>
                </div>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"></small>
                </Card.Footer>
            </Card>
            }
            </CardDeck>
            </Panel>
    </>
  )
}