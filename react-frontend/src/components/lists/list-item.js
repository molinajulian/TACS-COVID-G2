import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm } from "react-form-validator-core";
import ValidatableField from "../validation/validatable-field";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FlagIcon from '@material-ui/icons/Flag';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
  addCountry: {
    marginTop: '15px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
  },
  title: {
    alignSelf: 'flex-start',
  },
  editButton: {
    alignSelf: 'flex-start',
    marginBottom: '20px',
  }
}));

function createData(id, name) {
  return { id, name };
}

let rows = [
  createData(1, 'Canada'),
  createData(2, 'Estados Unidos'),
  createData(3, 'Mexico'),
];

const ListItemComponent = (props) => {
  const classes = useStyles();
  const [params, setParams] = useState({
    editMode: false,
    listName: props.listName,
    listId: props.listId,
    listItems: rows,
    openDialog: false,
  });

  const changeMode = () => {
    setParams(Object.assign({}, params, { editMode: !params.editMode }));
  }

  const handleInputChange = (event) => {
    setParams(Object.assign({}, params, { newCountry: event.target.value }));
  }

  const handleSubmit = () => {
    let countryList = params.listItems;
    countryList.push(createData(countryList.length + 1, params.newCountry));
    closeModal();
  }
  
  const removeItem = (id) => {
    let countryList = params.listItems;
    countryList.splice( countryList.findIndex(c => c.id === id) , 1);
    setParams(Object.assign({}, params, { listItems: countryList }));
  }
  
  const closeModal = () => {
    setParams(Object.assign({}, params, { newCountry: undefined }));
    setParams(Object.assign({}, params, { openDialog: false }));
  }
  
  const openModal = () => {
    setParams(Object.assign({}, params, { openDialog: true }));
  }

  return (
    <div className="container layout-dashboard" style={{backgroundColor: "#1C8EF9"}}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          Norteamérica
        </h1>
        <div style={{textAlign: "left"}}>
          {!params.editMode? (
            <div>
              <Button onClick={() => changeMode()}
                className={classes.editButton} variant="contained">
                Editar
              </Button>
            </div>
          ): (
              <Button onClick={() => changeMode()}
                className={classes.editButton} variant="contained">
                Guardar
              </Button>
          )}
        </div>
        <Paper>
          <List>
            {params.listItems.map((row) =>(
              <ListItem>
                <ListItemIcon>
                  <FlagIcon />
                </ListItemIcon>
                <ListItemText
                  primary={row.name}
                />
                { params.editMode ? 
                  <HighlightOffIcon onClick={() => removeItem(row.id)} /> : null
                }
              </ListItem>
            ))}

            { params.editMode ? 
              <ListItem
                onClick={openModal}
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faPlus} />
                </ListItemIcon>
                <ListItemText
                  primary="Agregar país..."

                />
              </ListItem>
              : null}
          </List>
        </Paper>
      </div>

      <Dialog open={params.openDialog} onClose={closeModal} aria-labelledby="form-dialog-title">
        <Paper className={classes.addCountry}>
          <ValidatorForm
            instantValidate={false}
            onSubmit={handleSubmit}
          >
            <div>
              <DialogTitle id="form-dialog-title">Agregar país</DialogTitle>
              <DialogContent>
                <ValidatableField
                  label='Pais'
                  placeholder='País'
                  name="pais"
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </DialogContent>

            </div>
            <DialogActions>
              <label onClick={closeModal} className="btn">Cancelar</label>
              <button type="submit" className="btn btn-primary">Agregar</button>
            </DialogActions>
          </ValidatorForm>
        </Paper>
      </Dialog>
    </div>
  );
}

export default ListItemComponent;