interface IPerson {
  id: string
  age: number
}

interface IWorder {
  companyId: string
}

type IStaff = IPerson & IWorder

const staff: IStaff = {
  id: 'abc',
  age: 33,
  companyId: 'def'
}