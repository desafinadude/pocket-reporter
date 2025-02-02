import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Heading from '../../global/Heading';
import ReactMarkdown from 'react-markdown'

import DeleteModal from './DeleteModal';

import Layout from '../../global/Layout';
import {
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
  ButtonClick,
  HeadingWrap,
  Description,
} from './styled';

const Question = ({ loading, id, title, description, answer, index, onUpdateAction }) => {
  if (loading) {
    return (
      <ListItem>
        <HeadingWrap>
          <Heading>Loading..</Heading>
        </HeadingWrap>
        <TextField fullWidth multiline margin="normal" variant="outlined" value="" disabled />
      </ListItem>
    );
  }

  return (
    <ListItem>
      <HeadingWrap>
        <Heading>{title}</Heading>
      </HeadingWrap>
      <Description><><ReactMarkdown>{description}</ReactMarkdown></></Description>
      <TextField
        fullWidth
        multiline
        margin="normal"
        variant="outlined"
        value={answer}
        onChange={event => onUpdateAction(id, index, event.target.value)}
      />
    </ListItem>
  );
};

const createButtons = (sendAction, sendEmailAction, toggleDeleteModal) => (
  <QuestionActions>
    <ButtonClick onClickEvent={toggleDeleteModal}>
      <Button color="secondary">Delete story</Button>
    </ButtonClick>
    <ButtonClick onClickEvent={sendAction}>
      <GreenButton variant="contained">Send via WhatsApp</GreenButton>
    </ButtonClick>
    <ButtonClick onClickEvent={sendEmailAction}>
      <GreenButton variant="contained">Send via Email</GreenButton>
    </ButtonClick>
  </QuestionActions>
);

const Markup = ({
  sendAction,
  sendEmailAction,
  deleteAction,
  onUpdateAction,
  deleteModal,
  toggleDeleteModal,
  loading,
  id,
  answers,
  title,
}) => {
  if (loading) {
    return (
      <Layout>
        <QuestionList>
          {[1, 2, 3].map(() => (
            <Question loading />
          ))}
        </QuestionList>
      </Layout>
    );
  }

  const deleteModalProps = {
    open: deleteModal,
    closeAction: toggleDeleteModal,
    title,
    action: deleteAction,
  };

  return (
    <Layout {...{ title }}>
      <DeleteModal {...deleteModalProps} />
      <QuestionList>
        {answers.map((props, index) => (
          <Question {...{ ...props, onUpdateAction, index, id }} />
        ))}
      </QuestionList>
      {createButtons(sendAction, sendEmailAction, toggleDeleteModal)}
    </Layout>
  );
};

export default Markup;
