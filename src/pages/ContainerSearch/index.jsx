import SearchComponent from "../../components/SearchComponent";
import useStyles from "./containerSearch.styles";
import { Autocomplete, TextField } from "@mui/material";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useRef } from "react";
import searchDocuments from "../../async/services/listDocuments";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import { MainTypes } from "../../types/typesFavorites";

const ContainerSearch = () => {
  const classes = useStyles();
  const ref0 = useRef();
  const ref1 = useRef();
  const {state, dispatch} = useContext(MainContext);
  const { results } = state;
  const {form, handlerChangeForm, handlerResetForm, simpleHandler} = useForm({search: '', unidad: 'Todo.', modalidad: 'Todo.'});
  const AutoCompleteHandlerForm1 = (event, value) => {
    simpleHandler(ref0.current.getAttribute("name"), value);
  }
  const AutoCompleteHandlerForm2 = (event, value) => {
    simpleHandler(ref1.current.getAttribute("name"), value);
  }
  useEffect(() => {
    getData(form);
  }, [form.search, form.unidad, form.modalidad, JSON.stringify(results)]);
  const getData = async(payload) => {
    if (payload.search !== "") {
      await searchDocuments(payload).then(({ data }) => {
        dispatch({type: MainTypes.searchDocument, payload: data});
      });
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    //handlerResetForm();
  }
  const academicUnit = [
    { label: "Todo.", },
    { label: "FATESCIPOL (Fac. Técnica, pregrado)." },
    { label: "ANAPOL (Pregrado).",},
    { label: "CEFOTES (Posgrado).", },
    { label: "ESCUELA SUPERIOR (Posgrado)."},
  ];
  const type =  [
    { label: "Todo.", },
    { label: "Perfil" },
    { label: "Tesis",},
    { label: "Proyecto de Grado", },
    { label: "Monografias"},
    { label: "Banco de Temas"},
  ]
  return (
    <div className={classes.wrapper}>
      <form onSubmit={onSubmit} className={classes.container}>
        <TextField  label="Buscar" name='search' onChange={handlerChangeForm} value={form.search}/>
        <Autocomplete
          ref={ref0}
          disablePortal
          className={classes.comboBox}
          onInputChange={AutoCompleteHandlerForm1}
          name='unidad' 
          options={academicUnit}
          renderInput={(params) => <TextField {...params}   label="Unidad Academica" />}
        />
        <Autocomplete
          ref={ref1}
          disablePortal
          className={classes.comboBox}
          id="type"
          name='modalidad' 
          onInputChange={AutoCompleteHandlerForm2}
          options={type}
          renderInput={(params) => <TextField {...params}   label="Typo" />}
        />
        <Button type='submit' className={classes.button}> Buscar </Button>
      </form>
    </div>
  );
};
export default ContainerSearch;
