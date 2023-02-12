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
import { selectCurrentDate } from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Button } from '../UI/Button';
import { DatePicker } from './DatePicker';

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

type FormData = { [key: string]: string };

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(selectIsShowAddItem);
  const [value, setValue] = useState<FormData>({
    title: '',
    description: '',
    date: '',
    time: '',
  });
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentDate = useAppSelector(selectCurrentDate);
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect Form');

    const handleClickOutside
    = (event: MouseEvent) => {
      if (formRef.current
        && !formRef.current.contains(event.target as Node)
        && buttonRef.current
        && !buttonRef.current.contains(event.target as Node)
      ) {
        // eslint-disable-next-line no-console
        console.log('handleClickOutside FROM');
        dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM));
      }
    };

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
    // eslint-disable-next-line no-console
    console.log('Form// onOpenFormHandler');

    dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form onSubmit');

    // dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM));
  };

  const onShowHandler = () => {
    // eslint-disable-next-line no-console
    console.log('onShowHandler');

    setIsShowDatePicker(true);
  };

  const onChangeDate = (newDate: number) => {
    // eslint-disable-next-line no-console
    console.log('onChangeDate');

    setValue({
      ...value,
      date: String(newDate),
    });

    // onShowHandler();
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
        >
          <div>
            {Object.keys(value).map(key => (
              <div key={key} className="PageForm1__input-container">
                <label htmlFor={key}>
                  {key}
                  :&nbsp;

                  {key === 'date' ? (
                    <>
                      {new Date(+value.date || currentDate).toDateString()}
                      <DatePicker
                        currentDate={currentDate}
                        onChangeDate={onChangeDate}
                        isShowContainer={isShowDatePicker}
                        onShow={onShowHandler}
                      />
                    </>
                  ) : (
                    <input
                      id={key}
                      type="text"
                      name={key}
                      value={value[key as keyof FormData]}
                      onChange={onChange}
                      placeholder={`input ${key}`}
                    />
                  )}
                </label>
              </div>
            ))}

            <button
              type="submit"
              onClick={onSubmit}
              // onSubmit={onSubmit}
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
