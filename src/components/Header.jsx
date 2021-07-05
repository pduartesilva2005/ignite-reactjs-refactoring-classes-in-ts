import { Component } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container } from '../styles/components/header';

import logoImg from '../assets/logo.svg';

export class Header extends Component {
  render() {
    const { openModal } = this.props;

    return (
      <Container>
        <header>
          <img src={logoImg} alt="GoRestaurant" />
          <nav>
            <div>
              <button type="button" onClick={openModal}>
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    );
  }
}
