import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story5 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">The Adventures Of Florian</h1>
          <div className="content-container">
            <p className="author-info">
              By: Henry Beston <br />
              Ririro. (2023, December 10). The Adventures of Florian.
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              Once upon a time there was a widow who had one daughter, named
              Isabella. They were of noble birth but lived in poverty. The
              father taught his daughter everything a father would teach his
              son. He taught her horseback riding, swimming, and fencing. He
              taught her so much that she was more like a boy than a girl.
              <br />
              <br />
              One fall evening the father passed away. Isabella was left with
              only the old house, there was no money. Isabella decided to go to
              the city and look for work. She would have more chances as a boy,
              so she cut her hair and put on men’s clothing.
              <br />
              <br />
              In the city, she saw a couple of esquires and introduced herself
              as Florian. Suddenly a black knight on a black horse came
              galloping towards them. He called the esquires to him, but they
              all ignored him. Florian got curious and asked: ‘Why do you act as
              if you don’t hear this knight?’ ‘He is the wizard of the Black
              Rock. Nobody wants to work for him because his castle is inhabited
              by demons,’ they answered.
              <br />
              <br />
              Florian knew that he had little choice. So he walked up to the
              wizard and offered to come along. After a long journey, they
              arrived at the castle. Before they entered the castle the wizard
              said: ‘Boy, don’t let anything you hear or see scare you. Be
              confident that no spirit or power can hurt you. Be loyal and you
              shall never have a reason to regret coming here.’ Florian, who had
              always been brave, decided to never let his courage be shaken, and
              it didn’t.
              <br />
              <br />
              And so it happened, that Florian worked in loyal service of the
              wizard for several years. One day Florian decided that he wanted
              to see more of the world and told the wizard that he had to leave.
              ‘Alright,’ said the wizard, who had grown to respect Florian. ‘I
              shall give you three parting gifts. The first is a necklace with a
              golden charm in the shape of a bird. This will keep you safe from
              magic and will sing when you come close to danger. The second gift
              is a key with which you can open any door in the world. The third
              gift is a sphere. Put it on the ground and it will help you when
              you lose your way. Above all you can call me when you are in
              deadly danger. I shall come help you.’
              <br />
              <br />
              Florian had to look for a new job and he found it at the royal
              couple of the Twelve Towers. They had a gorgeous and brave son,
              prince Florizel. The parents send their son Florizel to a king in
              hopes that he would fall in love with his daughter, princess
              Rosamond. Florizel asked Florian to join him and his company. In
              the meantime, Florian had fallen head over heels in love with
              Florizel.
              <br />
              <br />
              One morning, when the prince wanted to pick a beautiful flower,
              the little gold bird started to sing. Florian grabbed the flower
              and threw it away. ‘How rude!’, the company said. Shortly after
              the prince found a dagger on the road. Again the bird started
              singing. Before the prince could pick up the dagger, Florian
              snatched it from the ground and threw it in a ditch. Florian tried
              to explain that the flower and dagger were enchanted, but the
              prince was distracted by a beautiful garden with birds,
              butterflies, and flowers. At that moment, the golden bird started
              singing louder than it ever had. ‘Please, don’t go there,’ Florian
              begged. But the prince and his company were already near the
              garden. At that moment, everybody turned into stone, except for
              Florian and Florizel. It was the wicked witch who was behind this.
              She wanted to kidnap the prince and couple him with her ugly
              daughter. The witch immediately saw that it was Florian’s little
              gold bird that was protecting them from her magic. So she decided
              to get rid of Florian by conjuring her castle and garden to the
              other side of the world. She spoke a spell and everything
              disappeared. Florian used the sphere to find his way to the
              castle. But it took one year before he reached the gate of the
              witches’ garden.
              <br />
              <br />
              During that year the witch had done everything she could to make
              prince Florizel marry her ugly daughter. But the prince
              persistently refused. That evening Florian was standing in front
              of the garden. Florizel was locked in the top of the highest tower
              under lock and key of twenty different doors. Florian took the key
              the wizard had given him and opened all the doors until he found
              Florizel. The prince was so relieved to see Florian! He had
              already managed to free himself from the chains he was bound with.
              It didn’t take long before the witch discovered the escape. She
              found the boys quickly. She was about to change them both into
              hares, but Florian quickly put the necklace with the bird around
              Florizel’s neck. He was protected from the spell, but Florian
              transformed into a hare. The witch then sent hound dogs after him.
              The prince did what he could to protect the hare. Isabella called
              for the wizard to help her. The wizard came and defeated the
              witch. Isabella was changed back into her human form. The company
              came to live too. The witch had already decorated the castle for
              the wedding. ‘Too bad that princess Rosamond isn’t here,’ said the
              company, ‘then there would maybe be a wedding.’ ‘A wedding? No,’
              said Florizel, ‘not until I find a woman who is as loyal as
              Florian.’ ‘There already is,’ said the wizard and he touched
              Florian with his wand. There was Isabella in a beautiful dress.
              She was so beautiful that Florizel didn’t hesitate one second to
              ask her to marry him. Florizel’s parents were quickly fetched and
              so it happened that a wedding took place. Florizel and Isabella
              lived happily ever after.
            </p>

            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz5">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning5">
                <div className="button-container">
                  <button className="start-quiz-button">Meanings</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bot"></div>
      </div>
    </div>
  );
};

export default Story5;
