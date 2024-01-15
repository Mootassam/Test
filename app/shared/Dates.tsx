import moment from 'moment';

class Dates {
  static Date(date: any) {
    return moment(date).format('DD-MM-YYYY');
  }
}

export default Dates;
