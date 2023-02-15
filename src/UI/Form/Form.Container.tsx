import {
  ChangeEvent,
  FunctionComponent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { FORM_DATA } from '../../constants/FORM_DATA';
import { handleClickOutside } from '../../helpers/handleClickOutside';
import {
} from '../../store/features/Controls/controlsSlice';
import { selectCurrentDate } from '../../store/features/Interval/intervalSlice';
import {
  useAppSelector,
} from '../../store/hooks';
import { FormDataType } from '../../type/Form';
import { DatePicker } from '../DatePicker/DatePicker';
import { TimePicker } from '../TimePicker/TimePicker';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
  background-color: white;
  opacity: 1;
  width: 460px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Form = styled.form`
`;

const FormItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & label {
    width: 150px;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
  }
`;

interface FormBodyProps {
  buttonRef: RefObject<HTMLButtonElement>;
  onShowFormHandler: () => void;
}

export const FormContainer: FunctionComponent<FormBodyProps>
= ({ buttonRef, onShowFormHandler }) => {
  const [value, setValue] = useState<FormDataType>({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const formRef = useRef<HTMLDivElement>(null);
  const currentDate = useAppSelector(selectCurrentDate);
  const [isShowDatePickerContainer, setIsShowDatePickerContainer]
  = useState<boolean>(false);
  // const [isShowTimePickerContainer, setIsShowTimePickerContainer]
  // = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', (event) => handleClickOutside(
      event, buttonRef, formRef, onShowFormHandler,
    ));

    return () => {
      document.removeEventListener('click', (event) => handleClickOutside(
        event, buttonRef, formRef, onShowFormHandler,
      ));
    };
  }, []);

  const handleChange
  = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form onSubmit');
  };

  const onChangeDate = useCallback((newDate: number) => {
    // eslint-disable-next-line no-console
    // console.log('onChangeDate');

    setValue({
      ...value,
      [FORM_DATA.DATE]: String(newDate),
    });

    setIsShowDatePickerContainer(false);
  }, []);

  const onChangeTime = useCallback((newTime: string) => {
    // eslint-disable-next-line no-console
    console.log('onChangeTime');

    setValue({
      ...value,
      [FORM_DATA.TIME]: String(newTime),
    });

    // setIsShowTimePickerContainer(false);
  }, []);

  const onShowDatePickerHandler = () => {
    setIsShowDatePickerContainer(!isShowDatePickerContainer);
  };

  // const onShowTimePickerHandler = () => {
  //   setIsShowTimePickerContainer(!isShowTimePickerContainer);
  // };

  const dateValue = new Date(+value[FORM_DATA.DATE as keyof FormDataType]
    || currentDate).toDateString();

  const timeValue = value[FORM_DATA.TIME as keyof FormDataType]
    ? new Date(+value[FORM_DATA.TIME as keyof FormDataType]
      || currentDate).toTimeString()
    : 'no time';

  return (
    <Wrapper ref={formRef}>
      {/* <Form onSubmit={(e) => handleSubmit(e)}>
        {Object.keys(value).map((key) => {
          if (key === FORM_DATA.DATE) {
            return (
              <FormItem key={key}>
                <label htmlFor={key}>
                  {key}
                  :&nbsp;
                </label>
                {new Date(+value[key as FormDataKeys] || currentDate)
                  .toDateString()}
                <DatePicker
                  currentDate={currentDate}
                  onChangeDate={onChangeDate}
                  isShowDatePickerContainer={isShowDatePickerContainer}
                  onShowDatePickerHandler={onShowDatePickerHandler}
                />
              </FormItem>
            );
          }

          if (key === FORM_DATA.TIME) {
            return (
              <FormItem key={key}>
                <label htmlFor={key}>
                  {key}
                  :&nbsp;
                </label>
                <TimePicker
                  time={value[key as FormDataKeys]}
                  onChangeTime={onChangeTime}
                />
              </FormItem>
            );
          }

          return (
            <FormItem key={key}>
              <label htmlFor={key}>
                {key}
                :&nbsp;
              </label>
              <input
                id={key}
                type="text"
                name={key}
                value={value[key as keyof FormData]}
                onChange={onChange}
                placeholder={`input ${key}`}
              />
            </FormItem>
          );
        })}
        <input type="submit" value="Submit" />
      </Form> */}

      <Form onSubmit={handleSubmit}>
        <FormItem key={FORM_DATA.TITLE}>
          <label htmlFor={FORM_DATA.TITLE}>
            {FORM_DATA.TITLE}
            :&nbsp;
          </label>
          <input
            id={FORM_DATA.TITLE}
            type="text"
            name={FORM_DATA.TITLE}
            value={value[FORM_DATA.TITLE as keyof FormDataType]}
            onChange={handleChange}
            placeholder={`input ${FORM_DATA.TITLE}`}
          />
        </FormItem>

        <FormItem key={FORM_DATA.DESCRIPTION}>
          <label htmlFor={FORM_DATA.DESCRIPTION}>
            {FORM_DATA.DESCRIPTION}
            :&nbsp;
          </label>
          <input
            id={FORM_DATA.DESCRIPTION}
            type="text"
            name={FORM_DATA.DESCRIPTION}
            value={value[FORM_DATA.DESCRIPTION as keyof FormDataType]}
            onChange={handleChange}
            placeholder={`input ${FORM_DATA.DESCRIPTION}`}
          />
        </FormItem>

        <FormItem key={FORM_DATA.DATE}>
          <label htmlFor={FORM_DATA.DATE}>
            {FORM_DATA.DATE}
            :&nbsp;
          </label>
          {dateValue}
          <DatePicker
            currentDate={currentDate}
            onChangeDate={onChangeDate}
            isShowDatePickerContainer={isShowDatePickerContainer}
            onShowDatePickerHandler={onShowDatePickerHandler}
          />
        </FormItem>

        <FormItem key={FORM_DATA.TIME}>
          <label htmlFor={FORM_DATA.TIME}>
            {FORM_DATA.TIME}
            :&nbsp;
          </label>
          <input
            id={FORM_DATA.TIME}
            type="text"
            name={FORM_DATA.TIME}
            value={timeValue}
            onChange={handleChange}
            placeholder={`input ${FORM_DATA.TIME}`}
          />
          <TimePicker
            time={value[FORM_DATA.TIME as keyof FormDataType]}
            onChangeTime={onChangeTime}
          />
        </FormItem>

        <input type="submit" value="Submit" />
      </Form>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea
            value={value.title}
            onChange={e => handleChange(e)}
            name="title"
          />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </Wrapper>
  );
};
