import {
  createStore
} from "vuex";
import img from "../assets/avi-werde-hHz4yrvxwlA-unsplash 1.png"
import img2 from '../assets/patrick-tomasso-gMes5dNykus-unsplash 1.png'
import img3 from '../assets/douglas-sheppard-9rYfG8sWRVo-unsplash 1.png'
import img4 from '../assets/backbone-visuals-p9TgKEDOaAg-unsplash 1.png'

export default createStore({
  state: {
    investments: [{
        id: '1ehwhwhbd6dneneyd',
        title: 'Lekki home country',
        company: 'Soft estate',
        totalAmount: '10,000,000',
        paid: '5,000,000',
        balance: '2,000,000',
        location: 'Lekki Phase 2, Lagos, Nigeria',
        img,
        moreImages: [
          {
            id: '1',
            img,
          },
          {
            id: '2',
            img: img2,
          },
          {
            id: '3',
            img: img3,
          },
          {
            id: '4',
            img: img4,
          },
        ]
      },
      {
        id: 'edzybsdho9jw',
        title: 'Ibadan home country',
        company: 'Adron estate',
        totalAmount: '11,000,000',
        paid: '6,000,000',
        balance: '5,000,000',
        location: 'Orisunbare street, Ibadan, Nigeria',
        img,
        moreImages: [
          {
            id: '1',
            img,
          },
          {
            id: '2',
            img: img2,
          },
          {
            id: '3',
            img: img3,
          },
          {
            id: '4',
            img: img4,
          },
        ]
      }
    ],
    data: [{
        id: '1ehwhwhbd6dneneyd',
        title: 'Lekki home country',
        company: 'Soft estate',
        amount: '10,000,000',
        downPayment: '5,000,000',
        installment: '2,000,000',
        reference: 'GH5627GY3',
        status: '',
        date: '27/03/2022',
        paid: '5,000,000',
        img,
        moreImages: [
          {
            id: '1',
            img,
          },
          {
            id: '2',
            img: img2,
          },
          {
            id: '3',
            img: img3,
          },
          {
            id: '4',
            img: img4,
          },
        ]
      },
      {
        id: '2ddfhrnsbsoww82jd',
        title: 'Lekki home county',
        company: 'Hard estate',
        amount: '11,000,000',
        downPayment: '6,000,000',
        installment: '5,000,000',
        reference: 'GH5627GY3',
        status: '',
        date: '27/03/2022',
        paid: '5,000,000',
        img,
        moreImages: [
          {
            id: '1',
            img,
          },
          {
            id: '2',
            img: img2,
          },
          {
            id: '3',
            img: img3,
          },
          {
            id: '4',
            img: img4,
          },
        ]
      }
    ],
    openNav: false,
    openRec: false
  },
  getters: {
    investments(state) {
      return state.investments
    },
    data(state) {
      return state.data
    },
    openNav(state) {
      return state.openNav
    },
    openRec(state) {
      return state.openRec
      
    }
  },
  mutations: {
    setOpenNav(state) {
      state.openNav = true
      document.body.classList.add('remove-scrollbar')
      console.log();
    },
    setCloseNav(state) {
      state.openNav = false;
      document.body.classList.remove('remove-scrollbar')
    },
    setShowReceipt(state) {
      state.openRec = true
    },
    setHideReceipt(state) {
      state.openRec = false
    }
  },
 
  modules: {},
});