import { ChangeEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { POPUP } from '../constants/POPUP';
import {
  selectIsShowAddItem,
  switchPopup,
} from '../store/features/Controls/controlsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Button } from '../UI/Button';

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  z-index: 150;
`;

const FormContainer = styled.form`
  z-index: 50;
  position: absolute;
  left: -50%;
  top: 45px;
  background-color: white;
  opacity: 1;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(selectIsShowAddItem);
  const [value, setValue] = useState<any>({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onOpenFormHandler = () => {
    dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Button
        onClick={onOpenFormHandler}
      >
        Add new item
      </Button>

      {isFormOpen && (
        <FormContainer
          onSubmit={onSubmit}
        >
          {Object.keys(value).map(key => (
            <div key={key} className="PageForm1__input-container">
              <label htmlFor={key}>
                {key}
                :&nbsp;
                <input
                  id={key}
                  type="text"
                  name={key}
                  // value={value[key as keyof FormObject<Keys, string>]}
                  onChange={onChange}
                  placeholder={`input ${key}`}
                />

                {/* {showFails[key as keyof FormObject<Keys, string>]
                  && (
                    <ul key={key}>
                      {fails[key as keyof FormObject<Keys, string[]>]!
                        .map((e: string) => (<li key={e}>{e}</li>))}
                    </ul>
                  )} */}
              </label>
            </div>
          ))}

          <button
            type="submit"
            onClick={onSubmit}
            className="PageForm1__input-submit"
            // disabled={isLoading}
          >
            Submit
          </button>
        </FormContainer>
      )}
    </Wrapper>
  );
};
