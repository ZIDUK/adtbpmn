import Modeler from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import TokenSimulationModule from "bpmn-js-token-simulation";
import "bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css";

import "./styles.css";

import diagram from "./1-SubInicio.bpmn";

const container = document.getElementById("container");

const modeler = new Modeler({
  container,
  additionalModules: [TokenSimulationModule],
  keyboard: {
    bindTo: document,
  },
});

fetch(diagram)
  .then((response) => response.text())
  .then((bpmnXML) => {
    modeler
      .importXML(bpmnXML)
      .then(() => console.log("Diagrama cargado"))
      .catch((err) => console.error("Error al cargar el BPMN", err));
  });
