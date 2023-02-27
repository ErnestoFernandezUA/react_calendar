export default function* root() {
  // yield all([fork(login)]);
  // eslint-disable-next-line no-console
  console.log('saga');

  yield true;
}
