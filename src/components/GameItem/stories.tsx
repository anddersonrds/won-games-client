import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Remdeption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = args => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = args => <GameItem {...args} />

WithPayment.args = {
  downloadLink: 'https://wongames.com/downloads/anddersonrds',
  paymentInfo: {
    number: '**** **** **** 2502',
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    purchaseDate: 'Purchase made on 07/20/2021 at 20:32'
  }
}
