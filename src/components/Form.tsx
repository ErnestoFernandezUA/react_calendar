import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { POPUP } from '../constants/POPUP';
import {
  selectIsShowAddItem,
  switchPopup,
} from '../store/features/Controls/controlsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Button } from '../UI/Button';

const Wrapper = styled.div`
  background-color: white;
  z-index: 150;
`;

const FormContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
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
  const [value, setValue] = useState<{ [key: string]: string }>({
    title: '',
    description: '',
    date: '',
    time: '',
  });
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside
  = (event: MouseEvent) => {
    if (formRef.current
      && !formRef.current.contains(event.target as Node)
      && buttonRef.current
      && !buttonRef.current.contains(event.target as Node)
    ) {
      dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        ref={buttonRef}
        onClick={onOpenFormHandler}
      >
        Add new item
      </Button>

      {isFormOpen && (
        <FormContainer
          ref={formRef}
          onSubmit={onSubmit}
          onClick={e => e.stopPropagation()}
        >
          <div>
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

          </div>
        </FormContainer>
      )}
    </Wrapper>
  );
};
